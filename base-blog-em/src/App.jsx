import { Posts } from "./Posts";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";

// Client 생성 후 Provider 추가 가능
const queryClient = new QueryClient();

function App() {
  return (
    // Client가 가지고 있는 캐시 및 기본 옵션을 Provider의 자녀도 사용 가능
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Blog Posts</h1>
        <Posts />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
