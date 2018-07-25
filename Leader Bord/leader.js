var Board = React.createClass({
  render: function() {
    return (
      <App/>
    );
  }
});
var App = React.createClass({

  //setting up initial state
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount() {
    this.getDataFromServer('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  },
  //showResult Method
  showResult: function(Data) {

    this.setState({
      data: Data
    });
  },
  //making ajax call to get data from server
  getDataFromServer: function(URL) {
    //alert("hayyah");
    $.ajax({
      type: "GET",
      dataType: "json",
      url: URL,
      success: function(Data) {

        this.showResult(Data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  Res: function() {
    this.getDataFromServer('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
  },
  All: function() {
    this.getDataFromServer('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
  },

  render: function() {
   
    return (
      
        

      <div className="row">
        <header className="bg-danger"><h3 className="text-primary text-center">Brownie Points Earned By Campers In Free Code Camp</h3> </header>
                <div className="col-md-12">
                       

                    <table className="table table-bordered table-hover  table-condensed table-responsive">
                     
                      
                      
          
                    
                      
                 <thead>
                            <tr>
                 <th className="idcol ">rank</th>             
                                <th className="col-md-4 ">CamperName</th>
                                <th className="mess" id="recent" >
  <button className="btn btn-primary "    onClick={this.Res}  > Points In Last 30 Days                                    </button></th>

<th className="ron" id="alltime"> <button className="btn btn-warning " onClick={this.All}> Points All Time
                              </button></th>
                            </tr>
</thead>  
      <Result result={this.state.data}/>     
      </table>
        </div>
        </div>

    );
  }
});

var Result = React.createClass({

  render: function() {
    var self = this;
    var count = 0;
    var result = this.props.result
      .map(function(result, index) {
        count++;
        return <ResultItem key={index} user={ result }  count={count}/>
      });
    return (

      <tbody>
                            {result}
                        </tbody>

    );
  }
});
var ResultItem = React.createClass({

  render: function() {
    var self = this;
    return (
      <tr className="warning" >
            <td className="idcol">{this.props.count}</td>
                <td>
          <a href={"https://www.freecodecamp.com/"+this.props.user.username} target="_blank">
            <img src={this .props.user.img} className="userimg"/>
            <span>{this.props.user.username}</span>
          </a>
        </td>
                 <td>
                  
           {this.props.user.recent}
            </td>
                
          <td>{this.props.user.alltime}</td>
            </tr>
    );
  }
});

ReactDOM.render(
  <Board/>,
  document.querySelector("#app")
);