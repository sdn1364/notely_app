'use client';

import classes from './diary.module.css';
import { Widget } from '@/components';
import '@mdxeditor/editor/style.css';
import { TipTapEditor } from './components/tipTapEditor';

export function Diary() {
   return <Widget className={classes.diary}><TipTapEditor /></Widget>;
}
