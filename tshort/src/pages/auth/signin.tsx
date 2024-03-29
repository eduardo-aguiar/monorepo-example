import { getProviders, signIn } from 'next-auth/react';

const SignIn = ({ providers }) => (
  <>
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button
          onClick={() =>
            signIn(provider.id, {
              callbackUrl: `${window.location.origin}/`,
            })
          }
          type="button"
        >
          Sign in with {provider.name}
        </button>
      </div>
    ))}
  </>
);

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

export default SignIn;
