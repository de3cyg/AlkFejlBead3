import Ember from 'ember';

export default Ember.Component.extend({
   subjects: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                name: this.$('#name').val(),
                credit: this.$('#credit').val(),
            });
        }
    },
    
    validate() {
        var name = this.$('#name').val();
        var credit = parseInt(this.$('#credit').val());
        
        this.set('subjects.name', name === '' ? 'Név kötelező' : '');
        this.set('subjects.credit', isNaN(credit)  ? 'Kredit kötelező' : '');
        
        return this.get('subjects.name') === '' &&
               this.get('subjects.credit') === '';
    }
});
