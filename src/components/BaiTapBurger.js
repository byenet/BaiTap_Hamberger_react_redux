import React, { Component } from 'react'
import {connect} from 'react-redux' // thu vien ket noi voi redux
import './BaiTapBurger.css'

import * as action from '../redux/actions/index'

class BaiTapBurger extends Component {


    renderBreadMid = () =>{
        // console.log(this.props.burger);
        let {burger} = this.props
        // Cach duyet 1
        let content = [];
        for (let propsBurger in burger){
            // console.log(propsBurger, burger[propsBurger]); 
            // propsBurger chinh la name thuoc tinh
            // burger[propsBurger] chinh la burger.tenThuocTinh (se ra duoc value)
            let breadMid = [];
            for(let i=0; i<burger[propsBurger]; i++){
                breadMid.push(<div key={i} className={propsBurger}></div>);
            }
            content.push(breadMid);
        }
            return content;
        


        // entries se boc tach doi tuong thanh mang con // dung de destruct (boc tach)
        // console.log(Object.entries(burger));

        // return Object.entries(burger).map(([propsBurger,value], index) =>{
        //     // console.log(propsBurger,value);
        //     let breadMid = [];
        //     for (let i=0; i<value; i++){
        //         breadMid.push(<div key={i} className={propsBurger}></div>);
        //     }
        //     return breadMid;
        // })
        
    }

    renderMenu = () =>{
        // Lay props tu redux ve 
        let {menu,burger} = this.props;
        // console.log(menu);

        // dung cach nao keo menu ve cung duoc nhu o tren da dung for in nen o day minh dung entries
        return Object.entries(menu).map(([propsMenu,price],index) => {
            return (
                <tr key={index}>
                    <td>{propsMenu}</td>
                    <td>
                        <button onClick={() =>{this.props.addBreadMid(propsMenu,1)}}className="btn-success mr-2">+</button> 
                            {burger[propsMenu]}
                        <button onClick={() =>{this.props.addBreadMid(propsMenu,-1)}} className="btn-warning ml-2">-</button>
                    </td>
                    <td>{price}</td>
                    <td>{burger[propsMenu]*price}</td>
                </tr>
            )
        })
    }


    render() {
        return (
          <div className="container">
            <h3 className="display-4 text-success text-center my-5">
              Bài tập burger
            </h3>
            <div className="row">
              <div className="col-7">
                <h3 className="text-center text-danger my-5">
                  Bánh burger của bạn
                </h3>
                <div className="breadTop"></div>
                {this.renderBreadMid()}
                <div className="breadBottom"></div>
              </div>
              <div className="col-5">
                <h3 className="text-danger text-center my-5">Chọn thức ăn</h3>
                <table className="table table-hover text-center">
                  <thead>
                        <tr>
                            <th>Thức ăn</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMenu()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2"></td>
                            <td>Tổng cộng</td>
                            <td>{this.props.total}</td>
                        </tr>
                    </tfoot>
                </table>
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addBreadMid: (propsBurger, amount) => {
            dispatch(action.addBread(propsBurger, amount));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BaiTapBurger);
