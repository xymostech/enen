import produce from 'immer';

export interface IArticle {
  id: string;
  link: string;
  addedAt: Date;
  bookmark?: string;
  metadata?: any;
  HTMLData?: string;
  completedOn?: Date;
  progress?: number;
  fetching?: boolean;
}

export default (
  state = { articles: [] as IArticle[], labels: [] as any[] },
  action: any
) =>
  produce(state, draft => {
    switch (action.type) {
      case 'GET_ARTICLES_FULFILLED':
        draft.articles = action.articles;
        break;
      case 'ADD_ARTICLE_FULFILLED':
        draft.articles.push({
          addedAt: action.addedAt,
          id: action.id,
          link: action.link
        });
        break;
      case 'DELETE_ARTICLE_FULFILLED':
        const index = draft.articles.findIndex(
          (t: IArticle) => t.id === action.id
        );
        if (index > 0) {
          draft.articles.splice(index, 1);
        }
        break;
      case 'UPDATE_ARTICLE':
        draft.articles = draft.articles.map((t: IArticle) =>
          t.id === action.id ? Object.assign({}, t, action.data) : t
        );
        break;
      case 'SET_ARTICLE_COMPLETE_FULFILLED':
        draft.articles = draft.articles.map((t: IArticle) =>
          t.id === action.id
            ? { ...t, completedOn: action.value ? new Date() : undefined }
            : t
        );
        break;
      case 'UPDATE_BOOKMARK_FULFILLED':
        draft.articles = draft.articles.map((t: IArticle) =>
          t.id === action.id ? { ...t, bookmark: action.bookmark } : t
        );
        break;
      case 'UPDATE_PROGRESS_FULFILLED':
        draft.articles = draft.articles.map((t: IArticle) =>
          t.id === action.id ? { ...t, progress: action.progress } : t
        );
        break;
      case 'GET_LABELS_FULFILLED':
        draft.labels = action.labels;
        break;
      case 'ADD_LABEL_FULFILLED':
        draft.labels.push(action.label);
        break;
    }
  });
