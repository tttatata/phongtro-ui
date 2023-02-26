///Layout
import { HeaderOnly } from '~/components/Layout'
import Home from '~/pages/Home';

import Room from '~/pages/Room';
import Add from '~/pages/Add';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload/index.js';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/room', component: Room },
    { path: '/add', component: Add },
    { path: '/search', component: Search, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
]

const privateRoutes = [


]

export { publicRoutes, privateRoutes }