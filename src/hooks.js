import Usecallbackhook from './components/useCallback/useCallbackHook';
import Usecontexthook from './components/useContext/useContextHook';
import Usecustomhook from './components/useCustom/useCustomHook';
import Useeffecthook from './components/useEffect/useEffectHook';
import Usememohook from './components/useMemo/useMemoHook';
import Usereducerhook from './components/useReducer/useReducerHook';
import Userefhook from './components/useRef/useRefHook';
import Usestatehook from './components/useState/useStateHook';

const hooks = [
    {
        type: 'state',
        component: <Usestatehook />
    },
    {
        type: 'effect',
        component: <Useeffecthook />
    },
    {
        type: 'context',
        component: <Usecontexthook />
    },
    {
        type: 'reducer',
        component: <Usereducerhook />
    },
    {
        type: 'callback',
        component: <Usecallbackhook />
    },
    {
        type: 'memo',
        component: <Usememohook />
    },
    {
        type: 'ref',
        component: <Userefhook />
    },
    {
        type: 'custom',
        component: <Usecustomhook />
    }
];

export default hooks;