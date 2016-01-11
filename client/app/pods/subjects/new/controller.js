import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newSubject(formData) {
            console.log(formData);
            // formData.status = 'new';
            // formData.date = Date.now().toLocaleString();
            var subject = this.store.createRecord(
                'subject', 
                Object.assign(
                    {
                        name: 'Anal3',
                        credit: 3,
                        user: 'vMtY4ItrMp7zG5FNfaJ8',
                    }, 
                    formData
                )
            );
            subject.save();
            
          this.store.queryRecord('user', { filter: { online: true }}).then(function(user) {
                if(user.length>0){
                    var id = user[0].get('id');
                    user[0].set('subjects',user[0].subjects.push(subject.id));
                    subject.set('user',id);
                    user[0].save();
                    subject.save();
                    alert(id);
                    this.transitionToRoute('subjects');
                    
                }
            });
            
            
            
                    
            
        }
    }
});
