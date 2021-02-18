import React, { useState, useEffect } from 'react';
const Profile = () => {
    const [id] = useState(13);
    useEffect(() => {
        let item = { id }
        console.log(item);
        async function fetchData() {
            let result = await fetch('http://localhost/my-app1/src/api/profile', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            //console.log(result.data[0].name);
        }
        fetchData();
    });

    const user = JSON.parse(localStorage.getItem('user-info'));
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="well well-sm">
                            <div className="row">
                                <div className="col-sm-6 col-md-4">
                                    <img src="http://placehold.it/380x500" alt="" height="200" className="img-rounded img-responsive" />
                                </div>
                                <div className="col-sm-6 col-md-8">
                                    <h4>{user.data[0].name}</h4>
                                    <small><cite title="San Francisco, USA">San Francisco, USA <i className="glyphicon glyphicon-map-marker">
                                    </i></cite></small>
                                    <p>
                                        <i className="glyphicon glyphicon-envelope"></i>{user.data[0].email}
                                        <br />
                                        <i className="glyphicon glyphicon-globe"></i><a href="http://www.jquery2dotnet.com">www.jquery2dotnet.com</a>
                                        <br />
                                        <i className="glyphicon glyphicon-gift"></i>June 02, 1988</p>

                                    <div className="btn-group">
                                        <button type="button" className="btn btn-primary">
                                            Social</button>
                                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                            <span className="caret"></span><span className="sr-only">Social</span>
                                        </button>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><a href="#">Twitter</a></li>
                                            <li><a href="https://plus.google.com/+Jquery2dotnet/posts">Google +</a></li>
                                            <li><a href="https://www.facebook.com/jquery2dotnet">Facebook</a></li>
                                            <li className="divider"></li>
                                            <li><a href="#">Github</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;