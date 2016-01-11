import DS from 'ember-data';

const UserModel = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  neptun:    DS.attr('string'),
  password: DS.attr('string'),
  online:   DS.attr('boolean'),
  subjects: DS.hasMany('subject', {async: true}),
});

/*UserModel.reopenClass({
    FIXTURES: [
        {
            firstName: 'asd',
            lastName: 'qwe',
            neptun:    'user@asd.hu',
            password: 'asd',
        }
    ]
});*/

export default UserModel;
