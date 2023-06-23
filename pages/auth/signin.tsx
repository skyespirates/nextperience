import { useRef, FormEventHandler } from "react";
import { signIn } from "next-auth/react";

const signin = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (usernameRef.current !== null && passwordRef.current !== null) {
      const username = usernameRef?.current.value;
      const password = passwordRef?.current.value;
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });
      console.log(res);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-white w-80 gap-3 p-4 rounded text-base font-normal"
    >
      <input
        ref={usernameRef}
        className="outline-none border focus:border-blue-500 rounded  px-2 py-1"
        placeholder="Username"
        type="text"
        defaultValue="skyes07"
        readOnly
      />
      <input
        ref={passwordRef}
        className="outline-none border focus:border-blue-500 rounded  px-2 py-1"
        placeholder="Password"
        type="password"
        defaultValue="1234"
      />
      <input
        className="rounded text-center text-white  px-2 py-1 bg-blue-500 hover:bg-blue-600 cursor-pointer outline-none"
        type="submit"
        value="Login"
        readOnly
      />
    </form>
  );
};

export default signin;
