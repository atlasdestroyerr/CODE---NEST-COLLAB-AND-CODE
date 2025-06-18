import SidebarButton from "./sidebar-views/SidebarButton"
import { useAppContext } from "../../context/AppContext"
import { useSocket } from "../../context/SocketContext"
import { useViews } from "../../context/ViewContext"
import useResponsive from "../../hooks/useResponsive"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import { ACTIVITY_STATE } from "../../types/app"
import { SocketEvent } from "../../types/socket"
import { VIEWS } from "../../types/view"


import cn from "classnames"

import { useState } from 'react'


function Sidebar() {
    const {
        activeView,
        isSidebarOpen,
        viewComponents,
        viewIcons,
        setIsSidebarOpen,
    } = useViews()
    const { minHeightReached } = useResponsive()
    const { activityState, setActivityState } = useAppContext()
    const { socket } = useSocket()
    const { isMobile } = useWindowDimensions()
    const [ setShowTooltip] = useState(true)

    const changeState = () => {
        (false)
        if (activityState === ACTIVITY_STATE.CODING) {
            setActivityState(ACTIVITY_STATE.DRAWING)
            socket.emit(SocketEvent.REQUEST_DRAWING)
        } else {
            setActivityState(ACTIVITY_STATE.CODING)
        }

        if (isMobile) {
            setIsSidebarOpen(false)
        }
    }

    return (
        <aside className="flex w-full md:h-full md:max-h-full md:min-h-full md:w-auto">
            <div
                className={cn(

                    "fixed top-0 left-1/2 z-50 flex h-[50px] items-center justify-center gap-4 bg-slate-820 text-white-900 p-2 border-b border-darkHover ..."

                   
                    ,{
                        hidden: minHeightReached,
                    },
                )}
            >
                <SidebarButton
                    viewName={VIEWS.FILES}
                    icon={viewIcons[VIEWS.FILES]}
                />
                <SidebarButton
                    viewName={VIEWS.CHATS}
                    icon={viewIcons[VIEWS.CHATS]}
                />
                
                <SidebarButton
                    viewName={VIEWS.RUN}
                    icon={viewIcons[VIEWS.RUN]}
                />
                <SidebarButton
                    viewName={VIEWS.CLIENTS}
                    icon={viewIcons[VIEWS.CLIENTS]}
                />
                <SidebarButton
                    viewName={VIEWS.SETTINGS}
                    icon={viewIcons[VIEWS.SETTINGS]}
                />
            </div>
            <div
                className="absolute left-0 top-0 z-20 flex-col bg-dark md:static md:min-w-[300px]"
                style={isSidebarOpen ? {} : { display: "none" }}
            >
                {/* Render the active view component */}
                {viewComponents[activeView]}
            </div>
        </aside>
    )
}

export default Sidebar
