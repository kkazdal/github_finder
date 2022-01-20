import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import axios from 'axios';
import Search from './components/Search';
import About from './components/About';
import UserDetail from './components/UserDetail';
import { Alert } from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearItems = this.clearItems.bind(this);
    this.fetchUserDetail = this.fetchUserDetail.bind(this);
    this.fetchUserRepos = this.fetchUserRepos.bind(this);
    this.state = {
      users: [],
      loading: false,
      repoLoading: false,
      alert: null,
      user: {},
      repo: []
    }
  }
  componentDidMount() {
    this.setState({ loading: true })
    axios.get("https://api.github.com/users")
      .then((value) => {
        this.setState({
          users: value.data,
          loading: false
        })
      })
  }
  searchUsers(keyword) {

    if (keyword) {
      this.setState({ loading: true })
      axios.get("https://api.github.com/search/users?q=" + keyword)
        .then((value) => {
          this.setState({
            users: value.data.items,
            loading: false
          })
        })
    } else {
      this.setState({
        alert: {
          message: "HATA",
          type: "Uyarı"
        }
      })
    }

  }
  clearItems() {
    this.setState({
      users: [],
    })
  }
  alert(msg, type) {
    this.setState({
      alert: { message: msg, type: type }
    })
  }
  fetchUserDetail(username) {
    this.setState({ loading: true })
    axios.get("https://api.github.com/users/" + username)
      .then((value) => {
        this.setState({
          user: value.data,
          loading: false
        })
      })
  }
  fetchUserRepos(username) {
    this.setState({ repoLoading: true })
    axios.get("https://api.github.com/users/" + username + "/repos")
      .then((value) => {
        this.setState({
          repo: value.data,
          repoLoading: false
        })
      })
  }
  render() {

    return (
      <BrowserRouter>
        <Navbar />
        <Alert alert={this.state.alert} />
        <Routes>
          <Route path="/" element={
            <>
              <Search searchUsers={this.searchUsers} clearItems={this.clearItems}
                userList={this.state.users} />
              <Users users={this.state.users}
                loading={this.state.loading} alert={this.alert} />
            </>
          } />

          <Route path="/about" element={<About />} />
          <Route path="/user-detail/:username" element={
            <UserDetail
              fetchUserDetail={this.fetchUserDetail}
              fetchUserRepos={this.fetchUserRepos}
              user={this.state.user}
              repo={this.state.repo}
              repoLoading={this.state.repoLoading}
              loading={this.state.loading}
            />} />

        </Routes>
      </BrowserRouter >

    );
  }
}
