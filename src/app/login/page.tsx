import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div className="font-sans items-center justify-items-center">
      <main>
        <form className="flex flex-col gap-[32px] min-w-md p-16 shadow-md rounded-md">
          <h2 className="text-2xl font-bold">Create your Exprt account</h2>
          <ul className="flex flex-col gap-[16px]">
            <li className="flex flex-col gap-[8px]">
              <label className="text-sm font-medium" htmlFor="email">Email</label>
              <input className="border border-gray-200 rounded-lg h-[40px] w-[400px] px-2 text-sm" id="email" name="email" type="email" required />
            </li>
            <li className="flex flex-col gap-[8px]">
              <label className="text-sm font-medium" htmlFor="password">Password</label>
              <input className="border border-gray-200 rounded-lg h-[40px] w-[400px] px-2 text-sm" id="password" name="password" type="password" required />
            </li>
          </ul>
          <button className="rounded-lg border border-gray-200 hover:border-black transition duration-300 h-[40px] w-[400px] font-medium" formAction={login}>Log in</button>
          <button className="rounded-lg bg-[#01FF70] h-[40px] w-[400px] font-medium" formAction={signup}>Sign up</button>
        </form>
      </main>
    </div>
  )
}