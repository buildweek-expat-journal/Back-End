
exports.seed = function(knex) {
  return knex('photos').del()
    .then(function() {
      return knex('photos').insert([
        {
          user_id: 1,
          location: 'Petaluma',
          description: 'Hills of Sonoma County on the Back Roads',
          url: 'https://unsplash.com/photos/yoAl9exocEQ'
        },
        {
          user_id: 1,
          location: 'Portland',
          description: 'Sky above Portland',
          url: 'https://unsplash.com/photos/TElAqYMiAME'
        },
        {
          user_id: 1,
          location: 'Idaho',
          description: 'Raoming Buffalo',
          url: 'https://unsplash.com/photos/Ba0RMbU-SP8'
        },
        {
          user_id: 2,
          location: 'Petaluma',
          description: 'Hills of Sonoma County on the Back Roads',
          url: 'https://unsplash.com/photos/yoAl9exocEQ'
        },
        {
          user_id: 2,
          location: 'Montana',
          description: 'Winter Forest',
          url: 'https://unsplash.com/photos/aS8sG2McR_o'
        },
        {
          user_id: 2,
          location: 'Hawaii',
          description: 'sky at resort',
          url: 'https://unsplash.com/photos/toB7tKXne7U'
        },
        {
          user_id: 3,
          location: 'Mount RushMore',
          description: 'View of Mnt RushMore',
          url: 'https://unsplash.com/photos/LpbYMCxwdz4'
        },
        {
          user_id: 3,
          location: 'Petaluma',
          description: 'Hills of Sonoma County on the Back Roads',
          url: 'https://unsplash.com/photos/yoAl9exocEQ'
        },
        {
          user_id: 3,
          location: 'Caribbean',
          description: 'view from the local island cruise',
          url: 'https://unsplash.com/photos/FbN2z3bEaSs'
        },
      ])
    })
};
