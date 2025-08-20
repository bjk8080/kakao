import{UserContext}from '../../store/userContext';


const Header = ()=> {
    return (
        <UserContext.Consumer>
        {
            (name)=>
            (
            
              <header className="header">
                <p>
                <span>홍길동</span>님 환영합니다.{" "}
                </p>
                </header>
            )
        }
        </UserContext.Consumer>
    )
}