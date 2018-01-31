import React, { Component } from 'react'
import FreshInstall from '../components/FreshInstall'
import RecordFooter from '../components/RecordFooter'

class Index extends Component {
    constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      data: null
    }
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_ROOT}/pages/1`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.data
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

   render() {
    const { error, isLoaded, data } = this.state
    const record = data ? data.attributes : null

    if (error)  return <div>Error: {error.message}</div>
    if (!isLoaded) return <div>Loading...</div>
    return (
      <div>
        <h1>{record.title}</h1>

        {/* Remove this block if you don't need it anymore. */}
        <FreshInstall />

        <div dangerouslySetInnerHTML={{__html: record.teaser}} />

        <a href={record.image.url} className="magnific" title={`${record.image.file}`}>
          <img src={record.image.thumbnail} width="1200" height="500" alt={`${record.image.file}`} />
        </a>

        <div dangerouslySetInnerHTML={{__html: record.body}} />

        <RecordFooter record={record} />

        {/* {include('partials/_recordfooter.twig', { 'record': record })} */}
      </div>
    )
  }
}

export default Index
