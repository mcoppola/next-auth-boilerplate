import React from "react"
import { GetStaticProps } from "next"
import Router from "next/router"
import Layout from "../components/Layout"
import User, { UserProps } from "../components/User"
import prisma from '../lib/prisma'


export const getStaticProps: GetStaticProps = async () => {
  const users = await prisma.user.findMany({
    select: {
      name: true,
      email: true
    }
  })
  return { props: { users } }
}

type Props = {
  users: UserProps[]
}

const Home: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Next.js / Prisma - User Boilerplate</h1>
        <main>
          <div onClick={e => Router.push('/users')}>List of Users</div>
        </main>
      </div>
    </Layout>
  )
}

export default Home