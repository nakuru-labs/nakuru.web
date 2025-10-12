export type ModuleState = 'ready' | 'wip' | 'planned';

export interface ModuleMeta {
    key: string;          // route segment
    name: string;         // display name
    state: ModuleState;
    summary: string;
    base: string;         // e.g. /modules/system-info/
    changelog: string;    // e.g. /modules/system-info/changelog
}

export const modules: ModuleMeta[] = [
    {
        key: 'system-info',
        name: 'System Info',
        state: 'ready',
        summary: 'Detailed device, display, build, and runtime information in one place.',
        base: '/modules/system-info/',
        changelog: '/modules/system-info/changelog'
    },
    {
        key: 'playground',
        name: 'Playground',
        state: 'ready',
        summary: 'Customizable space for creating and testing game-specific debug widgets.',
        base: '/modules/playground/',
        changelog: '/modules/playground/changelog'
    },
    {
        key: 'console',
        name: 'Console',
        state: 'wip',
        summary: 'Log viewer with callstacks & filters (in progress).',
        base: '/modules/console/',
        changelog: '/modules/console/changelog'
    }
];