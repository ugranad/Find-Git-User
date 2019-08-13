class Github {
  constructor() {
    this.client_id = 'Enter Client id from Oauth';//Since git permits only 100 requests per hour!
    this.client_secret = 'Enter Client secret from Oauth';
    this.repos_count = 5;//limit the list of repos
    this.repos_sort = 'created:asc' // show the latest repos
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();


    return {
      profile,
      repos
    }
  }
}