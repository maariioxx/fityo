import { getUser, getUsernames } from '@/lib/utils';
import { auth } from '@/auth/auth';
import SettingsController from './components/SettingsController';

export default async function Page({
  searchParams,
}: {
  searchParams: { show: 'account' | 'nutrition' };
}) {
  const user = await getUser(false);
  const session = await auth();
  const usernames = await getUsernames();
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen w-screen mt-20 rounded-t-[100px] flex justify-center">
      <div className="w-1/2 p-12 flex flex-col items-center gap-20">
        <h1 className="text-4xl">Settings</h1>
        <SettingsController
          user={user!}
          session={session!}
          usernames={usernames!}
        />
      </div>
    </div>
  );
}
