import React, { useState, useContext, useEffect } from 'react';
const Context = React.createContext()

export const Provider = props => {
    return <Context.Provider value={props.store}>{props.children}</Context.Provider>
}
export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => {
    return Cmp => {
        return () => {
            const store = useContext(Context)
            const getProps = () => {
                const stateProps = mapStateToProps(store.getState())
                const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
                return { ...stateProps, ...dispatchProps }
            }
            useEffect(() => {
                // effect
                store.subscribe(() => {
                    setProps({ ...props, ...getProps() })
                })
                return () => {
                    // cleanup
                }
            }, [])
            const [props, setProps] = useState({ ...getProps() })
            return <Cmp {...props}></Cmp>
        }
    }
}

function bindActionCreators(creators, dispatch) {
    return Object.keys(creators).reduceRight((ret, item) => {
        ret[item] = bindActionCreator(creators[item], dispatch)
        return ret
    }, {})
}
function bindActionCreator(creator, dispatch) {
    return (...args) => dispatch(creator(...args))
}

// export const connect = (
//     mapStateToProps = (state) => state,
//     mapDispatchToProps = {}
//   ) => (WrapComponent) => {
//     return class ConnectComponent extends React.Component {
//       static contextTypes = {
//         store: PropTypes.object,
//       };
//       constructor(props, context) {
//         super(props, context);
//         this.state = {
//           props: {},
//         };
//       }
//       componentDidMount() {
//         const { store } = this.context;
//         // 当前状态 update 后, 放⼊监听器中, ⽤于下⼀次的更新(每次 dispatch 后会执⾏subscribe 中的所有函数)
//         store.subscribe(() => this.update());
//         this.update();
//       }
//       update() {
//         const { store } = this.context;
//         const stateProps = mapStateToProps(store.getState());
//         const dispatchProps = bindActionCreators(
//           mapDispatchToProps,
//           store.dispatch
//         );
//         this.setState({
//           props: {
//             ...this.state.props,
//             ...stateProps,
//             ...dispatchProps,
//           },
//         });
//       }
//       render() {
//         return <WrapComponent {...this.state.props}></WrapComponent>;
//       }
//     };
//   };