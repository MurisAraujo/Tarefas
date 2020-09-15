import api from '../../services/api';


export const loadTask = async params => {

  const AUTH = params.session;

  try {
    const { data } = await api.get('Task.php', { params: { AUTH: AUTH } });
    return data;
  } catch (error) {
    return [{}];

  }
}

export const loadTaskStates = async params => {
  const AUTH = params.session

  try {
    const { data } = await api.get('TaskState.php', { params: { AUTH: AUTH } })
    return data;
  } catch (error) {
    return [{}];
  }
}

