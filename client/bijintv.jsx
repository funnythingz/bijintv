// counter starts at 0
Session.setDefault('counter', 0);

var Hello = ReactMeteor.createClass({
    templateName: "hello",

    render: function() {
        var bijin = new Domain.Bijin("bijin");

        return (
            <div className="unko">
                {bijin.name}
            </div>
        )
    }
});

Template.hello.helpers({
    counter: function () {
        return Session.get('counter');
    }
});

Template.hello.events({
    'click button': function () {
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);
    }
});
