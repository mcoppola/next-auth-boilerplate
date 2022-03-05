import React from "react"
import Router from "next/router"

export type UserProps = {
  id: number;
  name: string;
  email: string;
};

const User: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${user.id}`)}>
      <p>{user.name} | {user.email}</p>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  )
}

export default User
