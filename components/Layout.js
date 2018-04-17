import Head from 'next/head'
import Link from 'next/link'

export default class Layout extends React.Component {
  render() {
    return <div>
      <Head>
        <title>{ this.props.title }</title>
        <meta name="viewport" content="initial-scale=1.0; width=device-width;" />
      </Head>

      <nav><h2><Link href="/" prefetch><a>HACKER NEWS 🤘</a></Link></h2> <Link href="about" prefetch><a>about</a></Link></nav> 

      { this.props.children }

      <style jsx>{`
        nav {
          background: #DC143C;
          color: white;
          font-weight: bold;
          font-size: 1.2em;
          text-shadow: 2px 2px 5px black;
          padding: 15px;
        }
        nav a {
          color: white;
          text-decoration: none;
        }
        h2 {
          font-size: 2em;
        }

        :global(body) {
          background: #f0f0f0;
          margin: 0;
          font-family: system-ui;
        }
      `}</style>
    </div>
  }
}