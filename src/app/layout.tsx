import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
	title: 'sasatech',
	description: 'sasatechのホームページです',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ja">
			<body>
				<Header />
					{children}
				<Footer />
			</body>
		</html>
	)
}
