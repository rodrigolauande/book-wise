import { signOut, useSession } from "next-auth/react";
import { NextPageWithLayout } from "./_app";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { HomeContainer } from "@/styles/pages/home";
import { LatestRatings } from "@/components/LatestRatings";
import { PopularBooks } from "@/components/PopularBooks";

const Home: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <LatestRatings/>
      <PopularBooks/>
    </HomeContainer>
  )
}

Home.getLayout = (page) => {
  return (
    <DefaultLayout title="Inicio">
      {page}
    </DefaultLayout>
  )
}

export default Home
