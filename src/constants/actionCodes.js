// account

export const ACCOUNT_PERMS_READ_FULFILLED = 'ACCOUNT_PERMS_READ_FULFILLED';
export const ACCOUNT_PERMS_READ_REJECTED = 'ACCOUNT_PERMS_READ_REJECTED';
export const ACCOUNT_ROLES_READ_FULFILLED = 'ACCOUNT_ROLES_READ_FULFILLED';
export const ACCOUNT_ROLES_READ_REJECTED = 'ACCOUNT_ROLES_READ_REJECTED';
export const SET_ACCOUNT_PERMS = 'SET_ACCOUNT_PERMS';

// authority

export const AUTH_VOCABS_READ_STARTED = 'AUTH_VOCABS_READ_STARTED';
export const AUTH_VOCABS_READ_FULFILLED = 'AUTH_VOCABS_READ_FULFILLED';
export const AUTH_VOCABS_READ_REJECTED = 'AUTH_VOCABS_READ_REJECTED';
export const SET_AUTH_VOCAB_WORKFLOW_STATE = 'SET_AUTH_VOCAB_WORKFLOW_STATE';

// authz

export const PERMS_READ_STARTED = 'PERMS_READ_STARTED';
export const PERMS_READ_FULFILLED = 'PERMS_READ_FULFILLED';
export const PERMS_READ_REJECTED = 'PERMS_READ_REJECTED';
export const ROLES_READ_STARTED = 'ROLES_READ_STARTED';
export const ROLES_READ_FULFILLED = 'ROLES_READ_FULFILLED';
export const ROLES_READ_REJECTED = 'ROLES_READ_REJECTED';

// batch

export const BATCH_INVOKE_STARTED = 'BATCH_INVOKE_STARTED';
export const BATCH_INVOKE_FULFILLED = 'BATCH_INVOKE_FULFILLED';
export const BATCH_INVOKE_REJECTED = 'BATCH_INVOKE_REJECTED';

// cspace

export const CSPACE_CONFIGURED = 'CSPACE_CONFIGURED';
export const SYSTEM_INFO_READ_FULFILLED = 'SYSTEM_INFO_READ_FULFILLED';
export const SYSTEM_INFO_READ_REJECTED = 'SYSTEM_INFO_READ_REJECTED';

// idGenerator

export const ADD_ID_GENERATORS = 'ADD_ID_GENERATORS';
export const READ_ID_GENERATOR_STARTED = 'READ_ID_GENERATOR_STARTED';
export const READ_ID_GENERATOR_FULFILLED = 'READ_ID_GENERATOR_FULFILLED';
export const READ_ID_GENERATOR_REJECTED = 'READ_ID_GENERATOR_REJECTED';
export const CREATE_ID_STARTED = 'CREATE_ID_STARTED';
export const CREATE_ID_FULFILLED = 'CREATE_ID_FULFILLED';
export const CREATE_ID_REJECTED = 'CREATE_ID_REJECTED';

// login

export const AUTH_RENEW_FULFILLED = 'AUTH_RENEW_FULFILLED';
export const AUTH_RENEW_REJECTED = 'AUTH_RENEW_REJECTED';
export const RESET_LOGIN = 'RESET_LOGIN';
export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';

// logout

export const LOGOUT_STARTED = 'LOGOUT_STARTED';
export const LOGOUT_FULFILLED = 'LOGOUT_FULFILLED';

// notification

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';

// optionList

export const ADD_OPTION_LISTS = 'ADD_OPTION_LISTS';
export const DELETE_OPTION_LIST = 'DELETE_OPTION_LIST';

// partialTermSearch

export const ADD_TERM_STARTED = 'ADD_TERM_STARTED';
export const ADD_TERM_FULFILLED = 'ADD_TERM_FULFILLED';
export const ADD_TERM_REJECTED = 'ADD_TERM_REJECTED';
export const PARTIAL_TERM_SEARCH_STARTED = 'PARTIAL_TERM_SEARCH_STARTED';
export const PARTIAL_TERM_SEARCH_FULFILLED = 'PARTIAL_TERM_SEARCH_FULFILLED';
export const PARTIAL_TERM_SEARCH_REJECTED = 'PARTIAL_TERM_SEARCH_REJECTED';
export const CLEAR_PARTIAL_TERM_SEARCH_RESULTS = 'CLEAR_PARTIAL_TERM_SEARCH_RESULTS';

// prefs

export const PREFS_LOADED = 'PREFS_LOADED';
export const COLLAPSE_PANEL = 'COLLAPSE_PANEL';
export const SET_ADMIN_TAB = 'SET_ADMIN_TAB';
export const SET_TOOL_TAB = 'SET_TOOL_TAB';
export const SET_RECORD_BROWSER_NAV_BAR_ITEMS = 'SET_RECORD_BROWSER_NAV_BAR_ITEMS';
export const SET_SEARCH_PAGE_RECORD_TYPE = 'SET_SEARCH_PAGE_RECORD_TYPE';
export const SET_SEARCH_PAGE_VOCABULARY = 'SET_SEARCH_PAGE_VOCABULARY';
export const SET_QUICK_SEARCH_RECORD_TYPE = 'SET_QUICK_SEARCH_RECORD_TYPE';
export const SET_QUICK_SEARCH_VOCABULARY = 'SET_QUICK_SEARCH_VOCABULARY';
export const SET_SEARCH_PANEL_PAGE_SIZE = 'SET_SEARCH_PANEL_PAGE_SIZE';
export const SET_SEARCH_RESULT_PAGE_PAGE_SIZE = 'SET_SEARCH_RESULT_PAGE_PAGE_SIZE';
export const SET_SEARCH_TO_SELECT_PAGE_SIZE = 'SET_SEARCH_TO_SELECT_PAGE_SIZE';
export const SET_FORM = 'SET_FORM';
export const SET_UPLOAD_TYPE = 'SET_UPLOAD_TYPE';
export const TOGGLE_RECORD_SIDEBAR = 'TOGGLE_RECORD_SIDEBAR';
export const TOGGLE_SEARCH_RESULT_SIDEBAR = 'TOGGLE_SEARCH_RESULT_SIDEBAR';
export const SET_STICKY_FIELDS = 'SET_STICKY_FIELDS';

// quickSearch

export const SET_QUICK_SEARCH_KEYWORD = 'SET_QUICK_SEARCH_KEYWORD';

// record

export const CLEAR_RECORD = 'CLEAR_RECORD';
export const CREATE_NEW_RECORD = 'CREATE_NEW_RECORD';
export const CREATE_NEW_SUBRECORD = 'CREATE_NEW_SUBRECORD';
export const FIELD_COMPUTE_FULFILLED = 'FIELD_COMPUTE_FULFILLED';
export const FIELD_COMPUTE_REJECTED = 'FIELD_COMPUTE_REJECTED';
export const RECORD_CREATED = 'RECORD_CREATED';
export const SUBRECORD_CREATED = 'SUBRECORD_CREATED';
export const RECORD_DELETE_STARTED = 'RECORD_DELETE_STARTED';
export const RECORD_DELETE_FULFILLED = 'RECORD_DELETE_FULFILLED';
export const RECORD_DELETE_REJECTED = 'RECORD_DELETE_REJECTED';
export const RECORD_READ_STARTED = 'RECORD_READ_STARTED';
export const RECORD_READ_FULFILLED = 'RECORD_READ_FULFILLED';
export const RECORD_READ_REJECTED = 'RECORD_READ_REJECTED';
export const SUBRECORD_READ_FULFILLED = 'SUBRECORD_READ_FULFILLED';
export const RECORD_SAVE_STARTED = 'RECORD_SAVE_STARTED';
export const RECORD_SAVE_FULFILLED = 'RECORD_SAVE_FULFILLED';
export const RECORD_SAVE_REJECTED = 'RECORD_SAVE_REJECTED';
export const RECORD_TRANSITION_STARTED = 'RECORD_TRANSITION_STARTED';
export const RECORD_TRANSITION_FULFILLED = 'RECORD_TRANSITION_FULFILLED';
export const RECORD_TRANSITION_REJECTED = 'RECORD_TRANSITION_REJECTED';
export const ADD_FIELD_INSTANCE = 'ADD_FIELD_INSTANCE';
export const SORT_FIELD_INSTANCES = 'SORT_FIELD_INSTANCES';
export const DELETE_FIELD_VALUE = 'DELETE_FIELD_VALUE';
export const MOVE_FIELD_VALUE = 'MOVE_FIELD_VALUE';
export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';
export const REVERT_RECORD = 'REVERT_RECORD';
export const VALIDATION_FAILED = 'VALIDATION_FAILED';
export const VALIDATION_PASSED = 'VALIDATION_PASSED';
export const DETACH_SUBRECORD = 'DETACH_SUBRECORD';

// recordBrowser

export const CLEAR_RELATED_RECORD_BROWSER_RELATED_CSID = 'CLEAR_RELATED_RECORD_BROWSER_RELATED_CSID';
export const SET_RELATED_RECORD_BROWSER_RELATED_CSID = 'SET_RELATED_RECORD_BROWSER_RELATED_CSID';

// recordPage

export const SET_RECORD_PAGE_PRIMARY_CSID = 'SET_RECORD_PAGE_PRIMARY_CSID';

// relation

export const CLEAR_RELATION_STATE = 'CLEAR_RELATION_STATE';
export const RELATION_DELETE_STARTED = 'RELATION_DELETE_STARTED';
export const RELATION_DELETE_FULFILLED = 'RELATION_DELETE_FULFILLED';
export const RELATION_DELETE_REJECTED = 'RELATION_DELETE_REJECTED';
export const RELATION_FIND_STARTED = 'RELATION_FIND_STARTED';
export const RELATION_FIND_FULFILLED = 'RELATION_FIND_FULFILLED';
export const RELATION_FIND_REJECTED = 'RELATION_FIND_REJECTED';
export const RELATION_SAVE_STARTED = 'RELATION_SAVE_STARTED';
export const RELATION_SAVE_FULFILLED = 'RELATION_SAVE_FULFILLED';
export const RELATION_SAVE_REJECTED = 'RELATION_SAVE_REJECTED';
export const SUBJECT_RELATIONS_UPDATED = 'SUBJECT_RELATIONS_UPDATED';

// search

export const CLEAR_SELECTED = 'CLEAR_SELECTED';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export const SET_MOST_RECENT_SEARCH = 'SET_MOST_RECENT_SEARCH';
export const CREATE_EMPTY_SEARCH_RESULT = 'CREATE_EMPTY_SEARCH_RESULT';
export const SEARCH_STARTED = 'SEARCH_STARTED';
export const SEARCH_FULFILLED = 'SEARCH_FULFILLED';
export const SEARCH_REJECTED = 'SEARCH_REJECTED';
export const SET_ALL_RESULT_ITEMS_SELECTED = 'SET_ALL_RESULT_ITEMS_SELECTED';
export const SET_RESULT_ITEM_SELECTED = 'SET_RESULT_ITEM_SELECTED';
export const DESELECT_RESULT_ITEM = 'DESELECT_RESULT_ITEM';

// searchPage

export const CLEAR_SEARCH_PAGE = 'CLEAR_SEARCH_PAGE';
export const SET_SEARCH_PAGE_KEYWORD = 'SET_SEARCH_PAGE_KEYWORD';
export const SET_SEARCH_PAGE_ADVANCED = 'SET_SEARCH_PAGE_ADVANCED';

// searchToSelect

export const CLEAR_SEARCH_TO_SELECT = 'CLEAR_SEARCH_TO_SELECT';
export const SET_SEARCH_TO_SELECT_KEYWORD = 'SET_SEARCH_TO_SELECT_KEYWORD';
export const SET_SEARCH_TO_SELECT_ADVANCED = 'SET_SEARCH_TO_SELECT_ADVANCED';
export const SET_SEARCH_TO_SELECT_RECORD_TYPE = 'SET_SEARCH_TO_SELECT_RECORD_TYPE';
export const SET_SEARCH_TO_SELECT_VOCABULARY = 'SET_SEARCH_TO_SELECT_VOCABULARY';

// vocabulary

export const READ_VOCABULARY_ITEMS_STARTED = 'READ_VOCABULARY_ITEMS_STARTED';
export const READ_VOCABULARY_ITEMS_FULFILLED = 'READ_VOCABULARY_ITEMS_FULFILLED';
export const READ_VOCABULARY_ITEMS_REJECTED = 'READ_VOCABULARY_ITEMS_REJECTED';
export const READ_VOCABULARY_ITEM_REFS_STARTED = 'READ_VOCABULARY_ITEM_REFS_STARTED';
export const READ_VOCABULARY_ITEM_REFS_FULFILLED = 'READ_VOCABULARY_ITEM_REFS_FULFILLED';
export const READ_VOCABULARY_ITEM_REFS_REJECTED = 'READ_VOCABULARY_ITEM_REFS_REJECTED';
