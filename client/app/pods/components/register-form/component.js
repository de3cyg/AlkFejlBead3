import Ember from 'ember';

export default Ember.Component.extend({
    users: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                firstName:  this.$('#firstName').val(),
                lastName:   this.$('#lastName').val(),
                neptun:      this.$('#neptun').val(),
                password:   this.$('#password').val()
            });
        }
    },
    
    
    validate() {
        var firstName = this.$('#firstName').val();
        var lastName  = this.$('#lastName').val();
        var neptun     = this.$('#neptun').val();
        var password  = this.$('#password').val();
        
        var cl = this;
        var l=true;
        
        let store = this.get('targetObject.store');    
        
        this.set('users.firstName', firstName === '' ? 'Név kötelező' : '');
        this.set('users.lastName', lastName === '' ? 'Név kötelező' : '');
        this.set('users.neptun', neptun==='' ? 'kötelező' : '');
        
        store.queryRecord('user', { filter: { neptun: neptun}}).then(function(user){
            if(user.length!==0){
                cl.set('users.neptun', 'Foglalt');
                l=false;
            }
        });
        
        
        this.set('users.password', password === '' ? 'Jelszó kötelező' : '');
               
        return this.get('users.firstName') === '' &&
               this.get('users.lastName') === '' &&
               this.get('users.neptun') === '' &&
               this.get('users.password') === '' && l;
    }
});
