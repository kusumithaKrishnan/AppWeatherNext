import Head from 'next/head'
import { wrapper } from '../store'
import styles from '../styles/Home.module.css'

export default function Home({ techStackUsed }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-200 h-full flex flex-col items-center justify-center">
        <h2 className="text-5xl">Welcome to Next.js</h2>
        <div className="bg-white max-w-md p-4 mt-4 rounded-lg shadow-lg">
          <h3 className="text-blue-500 font-semibold text-lg capitalize">Tech stack</h3>
          <p className="leading-tight mt-2">This is basic app with Next.js. We are using below technologies to prepare this demo</p>
          <ul className="mt-4">
            {techStackUsed.map((item, key) => (
              <li key={item.name} className={`bg-blue-500 inline-block px-2 rounded text-white mr-2 mb-2`}>
                <a href={item.url} target="_blank">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps({
  props: {
    techStackUsed: [
      {
        name: 'Next.js',
        url: 'https://nextjs.org/',
      },
      {
        name: 'TailwindCss',
        url: 'https://tailwindcss.com/',
      },
      {
        name: 'React.js',
        url: 'https://reactjs.org/',
      },
      {
        name: "React-Hook-Form",
        url: 'https://react-hook-form.com/'
      },
      {
        name: "Axios",
        url: 'https://github.com/axios/axios'
      },
      {
        name: "next-redux-wrapper",
        url: 'https://github.com/kirill-konshin/next-redux-wrapper'
      }
    ]
  }
}
)