import Ember from 'ember';

export default Ember.Component.extend({
    users: Ember.Object.create(),
    actions: {
        submit() {
           // var user = this.store.findRecord('user', {neptun: formData.neptun});
            var neptun = this.$('#neptun').val();
            var password  = this.$('#password').val();
            let store = this.get('targetObject.store');
            var l = true;
            this.set('users.neptun', neptun === '' ? 'neptun nincs megadva!' : '');
            this.set('users.password', password === '' ? 'Jelszó nincs megadva!' : '');
            l=this.get('users.neptun') === '' && this.get('users.password') === '';
            if(l){
                var cl = this;
                store.queryRecord('user', { filter: { neptun: neptun, password:password}}).then(function(user){
                    if(user.length===0){
                        l=false;
                        cl.set('users.err', l ? '':  'Hibás neptun vagy jelszó');
                    }
                });
            }
            if(l){
                this.get('onLogin')({
                    neptun:      this.$('#neptun').val(),
                    password:   this.$('#password').val()
                });
                
            }
            return l;
        }
    }
});
