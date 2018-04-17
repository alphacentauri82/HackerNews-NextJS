import Layout from '../components/Layout'

export default class extends React.Component {

  render() {
    return <Layout title="About">
      
      <h1>This app is...</h1>
      <img src="/static/garnet.jpg" alt="Soy lo mas"/>
       <h1>GARNET APPROVED</h1>
      
      <style jsx>{`
        h1 {
          text-align: center;
          color: #DC143C;
        }
        img {
          display: block;
          margin: 0 auto;
          width: 100%;
          border-radius: 50%;
          max-width: 300px;
        }
      `}</style>
    </Layout>
  }

}