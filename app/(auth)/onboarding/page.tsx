import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

async function Page(){
    const user = await currentUser();

    const userInfo = {};

    const userData = {
        userId: user?.id,
        username: userInfo?.username || user?.username,
        name: userInfo?.name || user?.firstName || "",
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl,
        objectId: userInfo?.id
    }
    return(
        <main className="mx-auto flex flex-col max-w-3xl">
            <h1 className="head-text mt-6">
                Onboarding
            </h1>
        <p className="mt-3 text-base-regular text-light-2 justify-start px-10 py-20">
            Complete your Profile
        </p>

        <section className="mt-10 bg-dark-2 p-10 rounded-xl">
<AccountProfile 
user = {userData}
btnTitle="Continue"
/>
        </section>
        </main>
    )
};

export default Page ;