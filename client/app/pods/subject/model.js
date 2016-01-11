import DS from 'ember-data';

const SubjectModel = DS.Model.extend({
  name: DS.attr('string'),
  credit: DS.attr('number'),
  user:   DS.belongsTo('user', {async:true})
});

/*SubjectModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'Anal3',
            credit: '2',
        }
    ]
});*/

export default SubjectModel;