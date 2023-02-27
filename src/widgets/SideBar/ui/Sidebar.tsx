import cls from './Sidebar.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames";
import {useState} from "react";
import {ThemeSwitcher} from "@/shared/ui/ThemeSwitcher";
import {LangSwitcher} from "@/widgets/LangSwitcher/LangSwitcher";


interface SidebarProps {
    className?: string,
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(cls.Sidebar, [className], {[cls.collapsed]: collapsed})}
        >
            <button onClick={onToggle}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.langButton}/>
            </div>
        </div>
    );
};

