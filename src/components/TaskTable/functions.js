import api from '../../services/api';


export const loadTask = async (params, order) => {
  const AUTH = params.session;

  try {
    const { data } = await api.get('Task.php', { params: { AUTH: AUTH, col: order.col, order: order.order } });
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

export const loadUserImages = async params => {
  const AUTH = params.session

  try {
    const { data } = await api.get('http://187.35.128.157:71/GLOBAL/Controller/EmployeePhoto.php', {params: {"AUTH": AUTH, "all": 1}})
    return data;
  } catch (error) {
    console.log(error)
  }
}

