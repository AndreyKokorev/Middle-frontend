import type { FC } from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import LightThemeIcon from '@/shared/assets/icons/theme-light.svg';
import DarkThemeIcon from '@/shared/assets/icons/theme-dark.svg';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
    >
      {
        theme === Theme.LIGHT
          ? <LightThemeIcon />
          : <DarkThemeIcon />
      }
    </Button>
  );
};
