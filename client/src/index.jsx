import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Search from './components/Search.jsx'
import RepoList from './components/RepoList.jsx'

const App = () => {
  const [repos, setRepos] = useState([])

  const search = (term) => {
    console.log(`${term} was searched`)
    $.ajax({
      // This is the url you should use to communicate with the API server.
      url: 'https://localhost:1128/repos',
      type: 'POST',
      data: JSON.stringify(term),
      contentType: 'application/json',
      success: function (data) {
        console.log('Data retrivied successfully');
      },
      error: function (data) {
        console.error(' Failed to bring repos', data);
      }
    });
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos} />
      <Search onSearch={search} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
