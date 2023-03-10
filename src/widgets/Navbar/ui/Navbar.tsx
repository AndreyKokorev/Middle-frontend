import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string,
}

function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(cls.navbar, [className])}>
      <div className={cls.links}>
        <AppLink
          to="/"
          className={cls.mainLink}
          theme={AppLinkTheme.PRIMARY}
        >
          Главная
        </AppLink>

        <AppLink
          to="/about"
          theme={AppLinkTheme.SECONDARY}
        >
          О сайте
        </AppLink>
      </div>
    </div>
  );
}

export { Navbar };
