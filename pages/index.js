import Head from "next/head"
import Layout from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from "../lib/posts"
import Link from "next/link"
import Date from "../components/date"
import { siteTitle } from "../components/config"
import { AuthorSection } from "../components/author"

export default function Home({ allPostsData }) {
	fetch("https://api.countapi.xyz/hit/myreactjourney.netlify.app/visits")
		.then((res) => res.json())
		.then((data) => console.log(`Number of visits: ${data.value}`))

	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<AuthorSection />
			<section
				className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
			>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}
