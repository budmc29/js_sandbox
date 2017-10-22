Template.profile.events({
  "submit .edit-profile": function(event) {
    var file = document.querySelector('#profileImage').files[0];

    if(file) {
      var fsFile = new FS.File(file);

      ProfileImages.insert(fsFile, function(error, result) {
        if (error) {
          throw new Meteor.Error(error);
        } else {
          var imageLocation = '/cfs/files/ProfileImages/' + result._id;

          UserImages.insert({
            userId: Meteor.userId(),
            username: Meteor.user().username,
            image: imageLocation
          });

          Router.go('/');
        }
      });
    }

    return false;
  }
});
