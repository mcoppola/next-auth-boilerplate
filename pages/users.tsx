import React from "react"
import { GetStaticProps } from "next"
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

const Users: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>All users....</h1>
        <main>
          {props.users.map((user) => (
            <div key={user.id} className="user">
              <User user={user} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Users
