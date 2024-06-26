import { auth } from '@/auth/auth';
import { redirect } from 'next/navigation';
import { supabase } from '../../supabase';
import moment from 'moment';
import { FoodNutrients } from '@/types/API/nutritionInstantEndpoint';

export async function getUser(doRedirect = true) {
  const sessionUser = await auth();
  if (doRedirect && sessionUser == null) redirect('/signup');
  const authUser = await supabase
    .schema('next_auth')
    .from('users')
    .select()
    .eq('email', sessionUser!.user!.email as string);
  const authUserData = authUser.data![0];
  const user = await supabase
    .schema('fityo')
    .from('users')
    .select()
    .eq('auth_user_id', authUserData.id);
  const userData = user.data![0];
  if (userData && typeof userData !== 'undefined')
    return {
      userId: userData.id,
      username: userData.username,
      created_at: userData.created_at,
      birthdate: userData.birthdate,
      genre: userData.genre,
    };
  if (doRedirect) return redirect('/signup');
  return;
}

export async function getEmail() {
  const sessionUser = await auth();
  const user = await getUser(false);
  if (sessionUser == null) redirect('/signup');
  const email = await supabase
    .schema('next_auth')
    .from('users')
    .select()
    .eq('email', sessionUser.user?.email as string);
  if (
    typeof email.data?.length !== 'undefined' &&
    email.data?.length > 0 &&
    user != null
  )
    return email.data[0];
  redirect('/home');
}

export async function checkIfUsernameExists(val: string) {
  const fetch = await supabase
    .schema('fityo')
    .from('users')
    .select()
    .eq('username', val);
  if (typeof fetch.data !== 'undefined' && fetch.data!.length > 0) return false;
  return true;
}

export async function checkIfEmailExists(val: string) {
  const fetch = await supabase
    .schema('next_auth')
    .from('users')
    .select()
    .eq('email', val);
  if (typeof fetch.data !== 'undefined' && fetch.data!.length > 0) return false;
  return true;
}

export async function getUsernames() {
  const fetch = await supabase.schema('fityo').from('users').select('username');
  return fetch.data;
}

export async function getCalories() {
  const user = await getUser();
  const info = await supabase
    .schema('nutrition')
    .from('calories_info')
    .select(
      'total_calories, monday_calories, tuesday_calories, wednesday_calories, thursday_calories, friday_calories, saturday_calories, sunday_calories'
    )
    .eq('user_id', user!.userId);
  return info.data![0];
}

export async function getCarbos() {
  const user = await getUser();
  const info = await supabase
    .schema('nutrition')
    .from('carbohidrates_info')
    .select(
      'total_carbohidrates, monday_carbohidrates, tuesday_carbohidrates, wednesday_carbohidrates, thursday_carbohidrates, friday_carbohidrates, saturday_carbohidrates, sunday_carbohidrates'
    )
    .eq('user_id', user!.userId);
  return info.data![0];
}

export async function getUsedMacros(date: string) {
  const user = await getUser();
  const formattedDate = formatDateToDB(date);
  let [usedCalories, usedCarbs, usedFats, usedProtein] = [0, 0, 0, 0];
  const day = await supabase
    .schema('nutrition')
    .from('diets_foods')
    .select()
    .eq('date', formattedDate)
    .eq('user_id', user!.userId);
  if (
    typeof day.data !== 'undefined' &&
    day.data != null &&
    day.data?.length > 0
  ) {
    for (let i = 0; i < day.data?.length; i++) {
      usedCalories += day.data[i].calories;
      usedCarbs += day.data[i].carbs;
      usedFats += day.data[i].fats;
      usedProtein += day.data[i].protein;
    }
  }
  return { usedCalories, usedCarbs, usedFats, usedProtein };
}

export async function getFats() {
  const user = await getUser();
  const info = await supabase
    .schema('nutrition')
    .from('fats_info')
    .select(
      'total_fats, monday_fats, tuesday_fats, wednesday_fats, thursday_fats, friday_fats, saturday_fats, sunday_fats'
    )
    .eq('user_id', user!.userId);
  return info.data![0];
}

export async function getProtein() {
  const user = await getUser();
  const info = await supabase
    .schema('nutrition')
    .from('protein_info')
    .select(
      'total_protein, monday_protein, tuesday_protein, wednesday_protein, thursday_protein, friday_protein, saturday_protein, sunday_protein'
    )
    .eq('user_id', user!.userId);
  return info.data![0];
}

export async function getDetailedFoodInfo(foodId: string) {
  const url = `https://api.edamam.com/api/food-database/v2/nutrients?app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ingredients: [
        {
          quantity: 100,
          measureURI:
            'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          foodId: foodId,
        },
      ],
    }),
  });
  const data: FoodNutrients = await res.json();
  return data;
}

export async function getUserFoods(date: string) {
  const formattedDate = moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
  console.log(formattedDate);
  const user = await getUser();
  const foods = await supabase
    .schema('nutrition')
    .from('diets_foods')
    .select()
    .eq('user_id', user?.userId as string)
    .eq('date', formattedDate);

  if (foods.error) console.log(foods.error);
  return foods.data;
}

export async function getUserCustomFoods(query: string) {
  if (query.length < 3) return [];
  const user = await getUser();
  const foods = await supabase
    .schema('nutrition')
    .from('custom_foods')
    .select()
    .like('name', `%${query}%`)
    .eq('user_id', user!.userId);
  if (foods.error) console.log(foods.error);
  console.log(foods);
  return foods.data;
}

export async function getMeasurements() {
  const user = await getUser();
  const measurements = await supabase
    .schema('fityo')
    .from('measures')
    .select('weight, neck, chest, arm, belly, leg, date')
    .eq('user_id', user!.userId)
    .order('date');
  let measurementsData = measurements.data!.map((measure) => {
    return {
      weight: +measure!.weight!,
      neck: +measure!.neck!,
      arm: +measure!.arm!,
      chest: +measure!.chest!,
      belly: +measure!.belly!,
      leg: +measure!.leg!,
      date: measure!.date!,
    };
  });
  return measurementsData;
}

export async function getMeasurementsByInterval(
  interval: string = moment().subtract(3, 'months').format('YYYY-MM-DD')
) {
  const user = await getUser();
  const measurements = await supabase
    .schema('fityo')
    .from('measures')
    .select('weight, neck, chest, arm, belly, leg, date')
    .eq('user_id', user!.userId)
    .gt('date', moment().subtract(3, 'months').format('YYYY-MM-DD'))
    .order('date');
  let measurementsData = measurements.data!.map((measure) => {
    return {
      weight: +measure!.weight!,
      neck: +measure!.neck!,
      arm: +measure!.arm!,
      chest: +measure!.chest!,
      belly: +measure!.belly!,
      leg: +measure!.leg!,
      date: measure!.date!,
    };
  });
  return measurementsData;
}

export async function getMeasurementsByDate(
  date: string = moment().format('YYYY-MM-DD')
) {
  const user = await getUser();
  const measurements = await supabase
    .schema('fityo')
    .from('measures')
    .select('weight, neck, chest, arm, belly, leg')
    .eq('user_id', user!.userId)
    .eq('date', date);
  if (measurements.data != null) return measurements.data[0];
}

export function formatDateToDB(date: string, isBirthdate = false) {
  return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
}

export function formatBirthdateToDb(date: string) {
  return date.split('T')[0];
}
