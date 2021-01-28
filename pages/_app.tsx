// --- Packages

import 'tailwindcss/tailwind.css'

import { AppContext, AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useEffect } from 'react'

// --- Locals

import { store } from '../redux/store'
import { useActions } from '../hooks/'
import { AppInitialProps } from 'next/dist/next-server/lib/utils'

// ---

interface IPassingProps {}

// also there is err field on AppProps
interface IProps extends IPassingProps, AppProps {}

// ---

const MyApp = ({ Component, pageProps, router }: IProps) => {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}

// ---

MyApp.getInitialProps = async (
	appContext: AppContext
): Promise<AppInitialProps & IPassingProps> => {
	let pageProps = {}
	if (appContext.Component.getInitialProps) {
		pageProps = await appContext.Component.getInitialProps(appContext.ctx)
	}
	return { pageProps }
}

export default MyApp
