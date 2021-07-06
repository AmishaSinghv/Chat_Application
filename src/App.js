import { ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine 
           height="100vh"
           projectID="72026c6f-f660-43e7-b2a2-a3a022cb32a3"
           userName="singhamisha"
           userSecret="Amisha123*"
           renderChatFeed={(chatAppProps)=> <ChatFeed  {...chatAppProps}/>}
        />
    );
}
export default App;