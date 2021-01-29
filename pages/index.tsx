import Head from 'next/head'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'

// ---

import { useActions, useTypedSelector } from '../hooks/'
import { sthSelector } from '../redux'

// ---

interface PassingProps {}

interface AppProps extends PassingProps, GetServerSideProps {}

// ---

const Home: NextPage<AppProps, PassingProps> = props => {
	const { sthActionCreator, bcRequestSessionActionCreator } = useActions()

	const stated = useTypedSelector(sthSelector)

	useEffect(() => {
		bcRequestSessionActionCreator()
		// sthActionCreator()
	}, [])

	if (stated) console.log(stated)

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>
			</main>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async context => {
	return {
		props: {}
	}
}

export default Home
