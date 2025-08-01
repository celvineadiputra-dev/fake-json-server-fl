import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
} from './sidebar'

export function AppSidebar() {
    return (
        <Sidebar variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="flex items-center space-x-4">
                            <div className="size-5 bg-blue-600 rounded-full"></div>
                            <div>
                                <h2 className="font-semibold">
                                    React Example{' '}
                                </h2>
                                <div className="italic">
                                    Fake Json Server FL
                                </div>
                            </div>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent></SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
