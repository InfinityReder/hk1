let React = require("react"),
    ReactDOM = require('react-dom');

let Input = React.createClass({
  getInitialState(){
    return {
      input:"asdf"
    }
  },
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate 接收到新state/props，渲染之前做一次是否更新判断。这里判断输入内容长度超过10时返回不更新")
    return nextState.input.length < 10;
  },
  componentDidMount(){
    console.log("componentDidMount 初次渲染完毕之后调用");
  },
  componentWillReceiveProps(){
    console.warn("componentWillReceiveProps\n好吧，这点当初没掌握……也是用得比较少\n根据那本蓝白书所说，“在任何时刻，组件的props都可以通过福组件来更改。出现这种情况时，componentWillReceiveProps方法会被调用，你也将获得更改props对象及更新state的机会”\n 增加父组件App，将Input丢进子组件里");
  },
  componentDidUpdate(){
    console.log("componentDidUpdate 组件更新之后调用");
  },
  handleChange(e){
    this.setState({
      input:e.target.value
    });
  },
  render(){
    return (
      <input name={this.props.name} type="text" onChange={this.handleChange} value={this.state.input} />
    )
  }
})
let App = React.createClass({
  getInitialState(){
    return {
      labelTxt:"input"
    }
  },
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        labelTxt:"很懒的demo"
      })
    },1000)
  },
  render(){
    return (
      <div>
        <label>{this.state.labelTxt}</label>
        <Input name="myInput" />
      </div>
    )
  }
})
ReactDOM.render(
      <App  />
,document.getElementById("app"));
