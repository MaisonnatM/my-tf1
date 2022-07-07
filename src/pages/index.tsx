import type { InferGetServerSidePropsType, NextPage } from "next"
import { MainLayout } from "../components/_layout"
import { HomeView } from "../components/_views"
import { getApolloClient, Program, PROGRAMS_QUERY } from "../api"

const Home = ({
  program: programs,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainLayout>
      <HomeView programs={programs} />
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const client = getApolloClient()

  const { data } = await client.query<{ program: Program[] }>(PROGRAMS_QUERY)

  return {
    props: {
      program: data.program,
    },
  }
}

export default Home
