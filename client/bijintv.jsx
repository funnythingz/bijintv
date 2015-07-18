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
